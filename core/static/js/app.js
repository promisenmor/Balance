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