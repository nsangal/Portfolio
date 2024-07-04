function toggleMenu(){
    const menu=document.querySelector(".menu-links")/*target an element on the webpage-menu links to use it*/
    const icon=document.querySelector(".hamburger-icon")/*target an element on the webpage-menu links to use it*/
    menu.classList.toggle("open")
    icon.classList.toggle("open")
} /*targeting these two elements->menu-links and hamburger-icon and 
whenever we click it its gonna either add or remove the open class in that element
and that open class has some styling*/