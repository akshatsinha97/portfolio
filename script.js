document.querySelector('.cross').style.display = 'none';
function openNav(){
    document.querySelector('.sidebar').classList.remove('sidebarGo')
    setTimeout(()=>{    document.querySelector('.cross').style.display = 'inline';    
}, 350);
document.querySelector('.ham').style.display = 'none';
document.querySelector('.main').style.opacity = '0.4';
document.querySelector('.main').style.zIndex = '-1';
};
function closeNav(){
    document.querySelector('.sidebar').classList.add('sidebarGo')
    document.querySelector('.cross').style.display = 'none';
    document.querySelector('.ham').style.display = 'inline';
    document.querySelector('.main').style.opacity = '';
    document.querySelector('.main').style.zIndex = '';
};