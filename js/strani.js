document.addEventListener('DOMContentLoaded', function(){

    // Кнопки на галлерея на страничке стран

let strani_gallery_nomer = 0
document.getElementsByClassName('strani_vuz_left_arrow')[0].addEventListener('click', function(){
    change_foto_text_strani()
   })

  
function change_foto_text_strani(){
    strani_gallery_nomer--;
    if (strani_gallery_nomer < 0) {
        strani_gallery_nomer = 2
    }
   
    document.getElementsByClassName('show_vuz')[0].classList.remove('show_vuz')
    document.getElementsByClassName('show_text')[0].classList.remove('show_text')

    document.getElementsByClassName('strani_vuz_img')[strani_gallery_nomer].classList.add('show_vuz')
    document.getElementsByClassName('strani_vuz_text')[strani_gallery_nomer].classList.add('show_text')

}

setInterval(function(){
    change_foto_text_strani()
},5000)

document.getElementsByClassName('strani_vuz_right_arrow')[0].addEventListener('click', function(){
    
    strani_gallery_nomer++;
    if (strani_gallery_nomer > 2) {
        strani_gallery_nomer = 0
    }
   
    document.getElementsByClassName('show_vuz')[0].classList.remove('show_vuz')
    document.getElementsByClassName('show_text')[0].classList.remove('show_text')

    document.getElementsByClassName('strani_vuz_img')[strani_gallery_nomer].classList.add('show_vuz')
    document.getElementsByClassName('strani_vuz_text')[strani_gallery_nomer].classList.add('show_text')
})

document.querySelector('.strani_show_all').addEventListener('click', function(){

    document.querySelector('.strani_show_all img').style.transform = 'rotate(180deg)'
    let text = document.querySelector('.strani_show_all span').innerHTML
 
    if (text === 'Свернуть'){
        text = 'Показать все'
    } else {
        text = 'Свернуть'
    }
    document.querySelector('.strani_show_all span').innerHTML = text
    

   let array = document.querySelectorAll('.strani_vuz_box')

   for (let i=3; i< array.length; i++){
        
        if (array[i].classList.contains('show_box')) {
            array[i].classList.remove('show_box')

        } else {
            array[i].classList.add('show_box')

        }        

       }
   })


})



