// language section
const lanTog = document.querySelector('.language-tog');
const languageSub = document.querySelector('.language-content-sub');
lanTog.addEventListener("click",()=>{
    if(languageSub.classList.contains('language-content-sub')){
        languageSub.classList.remove('language-content-sub');
    }else{
        languageSub.classList.add('language-content-sub');
    }
    
})
// selected language
const languageContent = document.querySelectorAll('.sub-language-content')
const activeLan = document.querySelector('.active-lan')
const activeFlag = document.querySelector('.active-flag')
languageContent.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const para = btn.querySelector('p')
        const Imgs = btn.querySelector('img')
        activeLan.innerHTML = para.innerHTML;
        activeFlag.src = Imgs.src;
        console.log(Imgs)
        if(languageSub.classList.contains('language-content-sub')){
            languageSub.classList.remove('language-content-sub');
        }else{
            languageSub.classList.add('language-content-sub');
        }
    })

})