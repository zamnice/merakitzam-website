// Dark Mode Functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkToggle = document.getElementById('darkToggle');
    const html = document.documentElement;
    
    // Check for saved user preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply initial mode
    if (savedMode === 'true' || (!savedMode && systemPrefersDark)) {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
    
    // Toggle dark mode
    darkToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        
        // Show notification
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: isDark ? 'Dark mode enabled' : 'Light mode enabled',
            showConfirmButton: false,
            timer: 1000,
            toast: true
        });
    });
    
    // Watch for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('darkMode')) {
            if (e.matches) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
        }
    });
});
