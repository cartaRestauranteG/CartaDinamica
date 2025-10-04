document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        // Solo añade el listener si el item no tiene la clase 'non-expandable'
        if (!item.classList.contains('non-expandable')) {
            const header = item.querySelector('.item-header');
            header.addEventListener('click', () => {
                // Cierra otros items abiertos para un efecto acordeón
                menuItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Abre o cierra el item actual
                item.classList.toggle('active');
            });
        }
    });
});
