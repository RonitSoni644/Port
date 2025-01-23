const sideMenu = document.querySelector('#sideMenu');
const navLink = document.querySelector('nav ul');
const navBar = document.querySelector('nav');

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY >50){
        navBar.classList.add('bg-white', 'bg-opacity-50', ' backdrop-blur-Ig','shadow-sm', 'dark:bg-darkTheme','dark: shadow-white/20' );
        navLink.classList.remove('bg-white','shadow-sm'
            , 'bg-opacity-50' ,'dark:border', 'dark:border-white/50' ,'dark:bg-transparent');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', ' backdrop-blur-Ig','shadow-sm', 'dark:bg-darkTheme','dark: shadow-white/20');
        navLink.classList.add('bg-white','shadow-sm'
            , 'bg-opacity-50' ,'dark:border', 'dark:border-white/50' ,'dark:bg-transparent' );
    }
})

// ----------------ligth and dark mode ----------
if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia("(perfers-color-scheme:dark)").matches)){
    document.documentElement.classList.add(
        'dark')
}else{ document.documentElement.classList.remove(
    'dark')

}


  function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
  }