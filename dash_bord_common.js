$(function(){


    

    $('.check-select-wrapper input').change(function(e){
        let checkBox = document.querySelectorAll('.check-select-wrapper input');
        toggleCheck(e,checkBox);
    });

    $('.clear-btn').click(function(){
        let input = document.querySelectorAll('input');
        let select = document.querySelectorAll('select');

        clearInput(input);
        clearSelect(select);
        
    });




    






    function clearInput(e){
        for(let i of e){
            let attr = i.getAttribute('type');
            if(attr == 'checkbox'){
                i.checked = false;
            }else {
                i.value = '';
            }
        }
    }

    function clearSelect(e){
        for(let i of e){
            i.value = -1;
        }
    }
    
    function toggleCheck(e,elme){
        for(let i of elme){
            i.checked = false;
            e.target.checked = true;
            let label = i.parentNode;
                label.classList.remove('checked-item');
            
            if(e.target.checked == true) {
                let label = e.target.parentNode;
                    label.classList.add('checked-item');
            }
        }
    }


    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let  date = now.getDate();
    let  hour = now.getHours();
    console.log(year);
    console.log(month);
    console.log(date);
    console.log(hour);


    

    



});