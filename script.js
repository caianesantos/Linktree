document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Link clicked:', link.href);
    });
});