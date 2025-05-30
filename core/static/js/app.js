// Transaction form handling
document.getElementById('transaction-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        amount: e.target.amount.value,
        description: e.target.description.value,
        date: e.target.date.value,
        notes: e.target.notes.value,
        // Add other fields
    };
    
    try {
        const response = await fetch('/api/transactions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            body: JSON.stringify(formData),
        });
        
        if (response.ok) {
            // Refresh transactions list
            window.location.reload();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Helper function to get CSRF token
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}



import { refreshToken, getAuthHeaders } from './auth.js';

// Intercept all fetch requests
const originalFetch = window.fetch;
window.fetch = async function(url, options = {}) {
    // Add auth headers if token exists
    const token = localStorage.getItem('access_token');
    if (token && !url.includes('/auth/')) {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        };
    }
    
    const response = await originalFetch(url, options);
    
    // If 401, try to refresh token and retry
    if (response.status === 401 && token) {
        const refreshed = await refreshToken();
        if (refreshed) {
            const newToken = localStorage.getItem('access_token');
            options.headers = {
                ...options.headers,
                'Authorization': `Bearer ${newToken}`
            };
            return originalFetch(url, options);
        }
    }
    
    return response;
};

// Check auth state on page load
document.addEventListener('DOMContentLoaded', function() {
    const protectedPaths = ['/dashboard/', '/transactions/', '/goals/', '/advisor/'];
    const currentPath = window.location.pathname;
    
    if (protectedPaths.includes(currentPath) && !localStorage.getItem('access_token')) {
        window.location.href = '/login/';
    }
    
    if ((currentPath === '/login/' || currentPath === '/register/') && localStorage.getItem('access_token')) {
        window.location.href = '/dashboard/';
    }
});