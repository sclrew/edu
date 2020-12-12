document.addEventListener('DOMContentLoaded', function(){

    let position = 3
    document.querySelector('.shag1').addEventListener('click', function(){
        clearInterval(interval)
        position = 1
        changeNumber(1)
        setInterval(interval)
    })

    document.querySelector('.shag2').addEventListener('click', function(){
        clearInterval(interval)
        changeNumber(2)
        position = 2
        setInterval(interval)
    })
    document.querySelector('.shag3').addEventListener('click', function(){
        clearInterval(interval)
        position = 3
        changeNumber(3)
        setInterval(interval)
    })
    document.querySelector('.shag4').addEventListener('click', function(){
        clearInterval(interval)
        position = 4
        changeNumber(4)
        setInterval(interval)
    })
    document.querySelector('.shag5').addEventListener('click', function(){
        clearInterval(interval)
        position = 5
        changeNumber(5)
        setInterval(interval)
    })

    document.querySelector('.left_arrow').addEventListener('click', function(){
        clearInterval(interval)
        position--
        if (position < 1) {position = 5 }
        changeNumber(position)
        setInterval(interval)
    })

    document.querySelector('.right_arrow').addEventListener('click', function(){
        clearInterval(interval)
        position++
        if (position > 5) {position = 1 }
        changeNumber(position)
        setInterval(interval)
    })

    document.querySelector('.begin_white').addEventListener("mouseenter", function(){
        clearInterval(interval)

    })

    document.querySelector('.begin_white').addEventListener("mouseleave", function(){
     interval = setInterval(function(){
            changeNumber(position)
            position++
            if (position > 5) {  position = 1 }
        }, 2000)

    })

    let interval = setInterval(function(){
        // alert('15 секунд истекли')
        changeNumber(position)
        position++
        if (position > 5) {  position = 1 }
    }, 2000)

    

   
})

function changeNumber(shag){
    switch (shag) {
        case 1 :
            document.querySelector('.begin_numbers_big').innerHTML = '01'
            document.querySelector('.begin_blue_line').style.height = '10%'
            begin_text_none()
            document.querySelector('.begin_text_block1').style.display = 'block'
            document.querySelector('.shag1').classList = 'begin_circle shag1 begin_blue'
            document.querySelector('.shag2').classList = 'begin_circle shag2' 
            document.querySelector('.shag3').classList = 'begin_circle shag3'
            document.querySelector('.shag4').classList = 'begin_circle shag4'
            document.querySelector('.shag5').classList = 'begin_circle shag5'
            break;
        case 2 :
            document.querySelector('.begin_numbers_big').innerHTML = '02'
            document.querySelector('.begin_blue_line').style.height = '38%'
            begin_text_none()
            document.querySelector('.begin_text_block2').style.display = 'block'
            document.querySelector('.shag1').classList = 'begin_circle shag1 begin_blue'
            document.querySelector('.shag2').classList = 'begin_circle shag2 begin_blue' 
            document.querySelector('.shag3').classList = 'begin_circle shag3'
            document.querySelector('.shag4').classList = 'begin_circle shag4'
            document.querySelector('.shag5').classList = 'begin_circle shag5'
            break;
        case 3 :
            document.querySelector('.begin_numbers_big').innerHTML = '03'
            document.querySelector('.begin_blue_line').style.height = '62%'
            begin_text_none()
            document.querySelector('.begin_text_block3').style.display = 'block'
            document.querySelector('.shag1').classList = 'begin_circle shag1 begin_blue'
            document.querySelector('.shag2').classList = 'begin_circle shag2 begin_blue' 
            document.querySelector('.shag3').classList = 'begin_circle shag3 begin_blue'
            document.querySelector('.shag4').classList = 'begin_circle shag4'
            document.querySelector('.shag5').classList = 'begin_circle shag5'
            break;
        case 4 :
            document.querySelector('.begin_numbers_big').innerHTML = '04'
            document.querySelector('.begin_blue_line').style.height = '85%'
            begin_text_none()
            document.querySelector('.begin_text_block4').style.display = 'block'
            document.querySelector('.shag1').classList = 'begin_circle shag1 begin_blue'
            document.querySelector('.shag2').classList = 'begin_circle shag2 begin_blue' 
            document.querySelector('.shag3').classList = 'begin_circle shag3 begin_blue'
            document.querySelector('.shag4').classList = 'begin_circle shag4 begin_blue'
            document.querySelector('.shag5').classList = 'begin_circle shag5'
            break; 
        case 5 :
            document.querySelector('.begin_numbers_big').innerHTML = '05'
            document.querySelector('.begin_blue_line').style.height = '100%'
            begin_text_none()
            document.querySelector('.begin_text_block5').style.display = 'block'
            document.querySelector('.shag1').classList = 'begin_circle shag1 begin_blue'
            document.querySelector('.shag2').classList = 'begin_circle shag2 begin_blue' 
            document.querySelector('.shag3').classList = 'begin_circle shag3 begin_blue'
            document.querySelector('.shag4').classList = 'begin_circle shag4 begin_blue'
            document.querySelector('.shag5').classList = 'begin_circle shag5 begin_blue'
        break;                 
    }
}

function begin_text_none(){

    document.querySelector('.begin_text_block1').style.display = 'none'
    document.querySelector('.begin_text_block2').style.display = 'none'
    document.querySelector('.begin_text_block3').style.display = 'none'
    document.querySelector('.begin_text_block4').style.display = 'none'
    document.querySelector('.begin_text_block5').style.display = 'none'    

}

    
