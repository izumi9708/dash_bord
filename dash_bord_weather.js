$(function(){

  let body = document.getElementsByTagName('body')[0];


  let prefArray = [
    {
        local : '北海道',
        value : 1,
        local_name : 'hokkaido',
        pref  : [
            {
              pref_name : '北海道',
              param : 'hokkaido'
            }
        ]
    },{
        local : '東北',
        value : 2,
        local_name : 'tohoku',
        pref : [
            {
              pref_name : '青森',
              param : 'aomori'
            },
            {
              pref_name : '秋田',
              param : 'akita'
            },
            {
              pref_name : '岩手',
              param : 'iwate'
            },
            {
              pref_name : '宮城',
              param : 'miyagi'
            },
            {
              pref_name : '山形',
              param : 'yamagata'
            },
            {
              pref_name : '福島',
              param : 'hukusima'
            }
        ]
    },{
        local : '関東',
        value : 3,
        local_name : 'kanto',
        pref : [
            {
              pref_name : '東京',
              param : 'tokyo'
            },
            {
              pref_name : '千葉',
              param : 'chiba'
            },
            {
              pref_name : '埼玉',
              param : 'saitama'
            },
            {
              pref_name : '神奈川',
              param : 'kanagawa'
            },
            {
              pref_name : '群馬',
              param : 'gunma'
            },
            {
              pref_name : '栃木',
              param : 'tochigi'
            },
            {
              pref_name : '茨城',
              param : 'ibaraki'
              }
        ]
    },{
        local : '中部',
        value : 4,
        local_name : 'chubu',
        pref : [
            {
              pref_name : '新潟',
              param : 'nigata'
            },
            {
              pref_name : '静岡',
              param : 'shizuoka'
            },
            {
              pref_name : '長野',
              param : 'nagano'
            },
            {
              pref_name : '岐阜',
              param : 'gihu'
            },
            {
              pref_name : '富山',
              param : 'toyama'
            },
            {
              pref_name : '石川',
              param : 'ishikawa'
            },
            {
              pref_name : '福井',
              param : 'hukui'
            },
            {
              pref_name : '山梨',
              param : 'yamanashi'
            },
            {
              pref_name : '愛知',
              param : 'aichi'
              }
        ]
    },{
        local : '近畿',
        value : 5,
        local_name : 'kinki',
        pref : [
            {
              pref_name : '京都',
              param : 'kyoto'
            },
            {
              pref_name : '大阪',
              param : 'osaka'
            },
            {
              pref_name : '三重',
              param : 'mie'
            },
            {
              pref_name : '滋賀',
              param : 'shiga'
            },
            {
              pref_name : '兵庫',
              param : 'hyogo'
            },
            {
              pref_name : '奈良',
              param : 'nara'
            },
            {
              pref_name : '和歌山',
              param : 'wakayama'
              }
        ]
    },{
        local : '中国',
        value : 6,
        local_name : 'chugoku',
        pref : [
            {
              pref_name : '鳥取',
              param : 'tottori'
            },
            {
              pref_name : '島根',
              param : 'shimane'
            },
            {
              pref_name : '岡山',
              param : 'okayama'
            },
            {
              pref_name : '広島',
              param : 'hiroshima'
            },
            {
              pref_name : '山口',
              param : 'yamaguchi'
            },
        ]
    },{
        local : '四国',
        value : 7,
        local_name : 'shikoku',
        pref : [
            {
              pref_name : '愛媛',
              param : 'ehime'
            },
            {
              pref_name : '香川',
              param : 'kagawa'
            },
            {
              pref_name : '徳島',
              param : 'tokushima'
            },
            {
              pref_name : '高知',
              param : 'kouchi'
            },
        ]
    },{
        local : '九州',
        value : 8,
        local_name : 'kyusyu',

        pref : [
            {
              pref_name : '福岡',
              param : 'hukuoka'
            },
            {
              pref_name : '佐賀',
              param : 'shiga'
            },
            {
              pref_name : '長崎',
              param : 'nagasaki'
            },
            {
              pref_name : '大分',
              param : 'oita'
            },
            {
              pref_name : '熊本',
              param : 'kumamoto'
            },
            {
              pref_name : '宮崎',
              param : 'miyazaki'
            },
            {
              pref_name : '鹿児島',
              param : 'kagoshima'
            },
        ]
    },{
        local : '沖縄',
        value : 9,
        local_name : 'okinawa',

        pref : [
            {
              pref_name : '沖縄',
              param : 'okinawa'
            }
        ]
    }
];


  let slideItem = document.querySelector('.map-content-inner');
  let selectName;
  let selectId;
  let selectArea;
  let modal = document.querySelector('.pref-modal');
  let modalContent = document.querySelector('.modal-content');


  $('.map-item').click(function(){
    let id = this.id;
    let resetItem = document.querySelector('.initialize');

      if(resetItem != null){
        resetItem.remove();
      }

      if(slideItem.classList.contains('modal-prev') == true){
          slideItem.classList.remove('modal-prev');
      }

      slideItem.classList.add('modal-next');
      displayPref(prefArray,id);
  });




  $('.back-btn').click(function(){
      if(slideItem.classList.contains('modal-next') == true){
          slideItem.classList.remove('modal-next');
      }

      slideItem.classList.add('modal-prev');
  });


  document.addEventListener('click',function(e){

    if(e.target && e.target.classList.contains('pref-item')){
      selectName = e.target.querySelector('.pref-name').textContent;
      selectId = e.target.querySelector('.pref-name').id;
      let temperaturePlace = document.querySelector('.item1');
      let weatherIcon;
      let wehatherPlace = document.querySelector('.flex-svg');
      let prefTxtPlace = document.querySelector('.setting-place');

      getGeo(selectId).then(res=>{
        if(res.length > 0){
          console.log(res);

          let lat = res[0].lat;
          let lng = res[0].lon;
        
          getWeather(lat,lng).then(res=>{
            console.log(res);
            let temperature = Math.round(res.main.temp - 273.15);
            let weather = res.weather[0].main;

            temperaturePlace.textContent = temperature;
            prefTxtPlace.textContent = selectName;

            switch(weather){
              case 'Clear':
                weatherIcon = '<svg  viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.5C21.5667 7.5 21.2083 7.35833 20.925 7.075C20.6417 6.79167 20.5 6.43333 20.5 6V1.5C20.5 1.06667 20.6417 0.708333 20.925 0.425C21.2083 0.141667 21.5667 0 22 0C22.4333 0 22.7917 0.141667 23.075 0.425C23.3583 0.708333 23.5 1.06667 23.5 1.5V6C23.5 6.43333 23.3583 6.79167 23.075 7.075C22.7917 7.35833 22.4333 7.5 22 7.5ZM32.25 11.75C31.95 11.45 31.8 11.1 31.8 10.7C31.8 10.3 31.95 9.95 32.25 9.65L35.4 6.45C35.7 6.15 36.0583 6 36.475 6C36.8917 6 37.25 6.15 37.55 6.45C37.85 6.75 38 7.1 38 7.5C38 7.9 37.85 8.25 37.55 8.55L34.35 11.75C34.05 12.05 33.7 12.2 33.3 12.2C32.9 12.2 32.55 12.05 32.25 11.75ZM38 23.5C37.5667 23.5 37.2083 23.3583 36.925 23.075C36.6417 22.7917 36.5 22.4333 36.5 22C36.5 21.5667 36.6417 21.2083 36.925 20.925C37.2083 20.6417 37.5667 20.5 38 20.5H42.5C42.9333 20.5 43.2917 20.6417 43.575 20.925C43.8583 21.2083 44 21.5667 44 22C44 22.4333 43.8583 22.7917 43.575 23.075C43.2917 23.3583 42.9333 23.5 42.5 23.5H38ZM22 44C21.5667 44 21.2083 43.8583 20.925 43.575C20.6417 43.2917 20.5 42.9333 20.5 42.5V38C20.5 37.5667 20.6417 37.2083 20.925 36.925C21.2083 36.6417 21.5667 36.5 22 36.5C22.4333 36.5 22.7917 36.6417 23.075 36.925C23.3583 37.2083 23.5 37.5667 23.5 38V42.5C23.5 42.9333 23.3583 43.2917 23.075 43.575C22.7917 43.8583 22.4333 44 22 44ZM9.65 11.75L6.45 8.6C6.15 8.3 6 7.94167 6 7.525C6 7.10833 6.15 6.75 6.45 6.45C6.75 6.15 7.1 6 7.5 6C7.9 6 8.25 6.15 8.55 6.45L11.75 9.65C12.05 9.95 12.2 10.3 12.2 10.7C12.2 11.1 12.05 11.45 11.75 11.75C11.45 12.0167 11.0917 12.15 10.675 12.15C10.2583 12.15 9.91667 12.0167 9.65 11.75ZM35.45 37.55L32.25 34.35C31.95 34.05 31.8 33.7 31.8 33.3C31.8 32.9 31.95 32.55 32.25 32.25C32.5167 31.9833 32.8583 31.85 33.275 31.85C33.6917 31.85 34.05 31.9833 34.35 32.25L37.6 35.4C37.9 35.7 38.0417 36.0583 38.025 36.475C38.0083 36.8917 37.8667 37.25 37.6 37.55C37.3 37.85 36.9417 38 36.525 38C36.1083 38 35.75 37.85 35.45 37.55ZM1.5 23.5C1.06667 23.5 0.708333 23.3583 0.425 23.075C0.141667 22.7917 0 22.4333 0 22C0 21.5667 0.141667 21.2083 0.425 20.925C0.708333 20.6417 1.06667 20.5 1.5 20.5H6C6.43333 20.5 6.79167 20.6417 7.075 20.925C7.35833 21.2083 7.5 21.5667 7.5 22C7.5 22.4333 7.35833 22.7917 7.075 23.075C6.79167 23.3583 6.43333 23.5 6 23.5H1.5ZM6.45 37.55C6.15 37.25 6 36.9 6 36.5C6 36.1 6.15 35.75 6.45 35.45L9.65 32.25C9.91667 31.9833 10.2583 31.85 10.675 31.85C11.0917 31.85 11.45 31.9833 11.75 32.25C12.05 32.55 12.2 32.9083 12.2 33.325C12.2 33.7417 12.05 34.1 11.75 34.4L8.6 37.55C8.3 37.85 7.94167 38 7.525 38C7.10833 38 6.75 37.85 6.45 37.55ZM22 34C18.6667 34 15.8333 32.8333 13.5 30.5C11.1667 28.1667 10 25.3333 10 22C10 18.6667 11.1667 15.8333 13.5 13.5C15.8333 11.1667 18.6667 10 22 10C25.3333 10 28.1667 11.1667 30.5 13.5C32.8333 15.8333 34 18.6667 34 22C34 25.3333 32.8333 28.1667 30.5 30.5C28.1667 32.8333 25.3333 34 22 34Z" fill="#F9A708"/></svg>';
                break;

              case 'Clouds':
                weatherIcon = '<svg viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 27C7.6 27 5.125 25.975 3.075 23.925C1.025 21.875 0 19.4 0 16.5C0 13.8667 0.941666 11.5167 2.825 9.45C4.70833 7.38333 7.05 6.25 9.85 6.05C10.9167 4.18333 12.325 2.70833 14.075 1.625C15.825 0.541667 17.8 0 20 0C23.0333 0 25.575 0.958333 27.625 2.875C29.675 4.79167 30.9333 7.16667 31.4 10C34.0333 10.1333 36.125 11.025 37.675 12.675C39.225 14.325 40 16.2667 40 18.5C40 20.8333 39.175 22.8333 37.525 24.5C35.875 26.1667 33.8667 27 31.5 27H10.5Z" fill="#BCBCBC"/></svg>';
                break;
              
              case 'Rain':
                weatherIcon = '<svg  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6389 39.8389C22.2722 40.0056 21.8806 40.0222 21.4639 39.8889C21.0472 39.7556 20.7556 39.5056 20.5889 39.1389L17.1389 32.2389C16.9722 31.8722 16.9472 31.4806 17.0639 31.0639C17.1806 30.6472 17.4222 30.3556 17.7889 30.1889C18.1556 30.0222 18.5472 30.0056 18.9639 30.1389C19.3806 30.2722 19.6722 30.5222 19.8389 30.8889L23.2889 37.7889C23.4556 38.1556 23.4806 38.5472 23.3639 38.9639C23.2472 39.3806 23.0056 39.6722 22.6389 39.8389ZM34.6389 39.7889C34.2722 39.9556 33.8806 39.9722 33.4639 39.8389C33.0472 39.7056 32.7556 39.4556 32.5889 39.0889L29.1389 32.1889C28.9722 31.8222 28.9472 31.4306 29.0639 31.0139C29.1806 30.5972 29.4222 30.3056 29.7889 30.1389C30.1556 29.9722 30.5472 29.9556 30.9639 30.0889C31.3806 30.2222 31.6722 30.4722 31.8389 30.8389L35.2889 37.7389C35.4556 38.1056 35.4806 38.4972 35.3639 38.9139C35.2472 39.3306 35.0056 39.6222 34.6389 39.7889ZM10.6389 39.7889C10.2722 39.9556 9.88059 39.9806 9.46389 39.8639C9.04719 39.7472 8.75559 39.5056 8.58889 39.1389L5.13889 32.2389C4.97222 31.8722 4.95555 31.4806 5.08889 31.0639C5.22222 30.6472 5.47222 30.3556 5.83889 30.1889C6.20555 30.0222 6.59722 29.9972 7.01389 30.1139C7.43055 30.2306 7.72222 30.4722 7.88889 30.8389L11.3389 37.7889C11.5056 38.1556 11.5222 38.5389 11.3889 38.9389C11.2556 39.3389 11.0056 39.6222 10.6389 39.7889Z" fill="#14AAFF"/><path d="M10.5 27C7.6 27 5.125 25.975 3.075 23.925C1.025 21.875 0 19.4 0 16.5C0 13.8667 0.941666 11.5167 2.825 9.45C4.70833 7.38333 7.05 6.25 9.85 6.05C10.9167 4.18333 12.325 2.70833 14.075 1.625C15.825 0.541667 17.8 0 20 0C23.0333 0 25.575 0.958333 27.625 2.875C29.675 4.79167 30.9333 7.16667 31.4 10C34.0333 10.1333 36.125 11.025 37.675 12.675C39.225 14.325 40 16.2667 40 18.5C40 20.8333 39.175 22.8333 37.525 24.5C35.875 26.1667 33.8667 27 31.5 27H10.5Z" fill="#BCBCBC"/></svg>';
                break;

                case 'Thunderstorm':
                  weatherIcon = '<svg viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 27C7.6 27 5.125 25.975 3.075 23.925C1.025 21.875 0 19.4 0 16.5C0 13.8667 0.941666 11.5167 2.825 9.45C4.70833 7.38333 7.05 6.25 9.85 6.05C10.9167 4.18333 12.325 2.70833 14.075 1.625C15.825 0.541667 17.8 0 20 0C23.0333 0 25.575 0.958333 27.625 2.875C29.675 4.79167 30.9333 7.16667 31.4 10C34.0333 10.1333 36.125 11.025 37.675 12.675C39.225 14.325 40 16.2667 40 18.5C40 20.8333 39.175 22.8333 37.525 24.5C35.875 26.1667 33.8667 27 31.5 27H10.5Z" fill="#BCBCBC"/><path d="M18.5 42.5L23.35 37L19.35 35L25 28.5H29L24.15 34L28.15 36L22.5 42.5H18.5ZM6.5 42.5L11.35 37L7.35 35L13 28.5H17L12.15 34L16.15 36L10.5 42.5H6.5Z" fill="#E1DB39"/></svg>';
              break;


            }

            wehatherPlace.innerHTML = weatherIcon;

            modal.classList.remove('modal-active');
            modalContent.classList.remove('content-active');
            body.style.overflow = 'auto';
            slideItem.classList.remove('modal-next');
            
          });

        }else {
          alert('この都道府県は選択できません。\n 別の都道府県を選択してください。');
        }
        
      
      });
      
      
    }

  });






  async function getGeo(id){
    let area = id;
    let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${id}&limit=1&appid=83a388baa1e3740aa9f8a5db8040456c`);

    return response.json();
  
  }
  
  async function getWeather(lat,lng){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=83a388baa1e3740aa9f8a5db8040456c`);
  
    return response.json();
  }
  


  function displayPref(array,id){
    let parentElement = document.querySelector('.pref-list');
    let initialize = document.createElement('div');
        initialize.classList.add('initialize');
    
    
    for(let i of array){
      let val = i.value;
      
      if(id == val){
        initialize.id = i.local_name;
        let pref = i.pref;
        
        for(let v of pref){
          let parentDiv = document.createElement('div');
              parentDiv.classList.add('pref-item');

          let html = `<div class="pref-flex">
                          <p id="${v.param}" class="pref-name">${v.pref_name}</p>
                          <div class="arrow-icon"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 19.84 19.84"><path id="circle-chevron-right-solid" d="M9.92,0a9.92,9.92,0,1,0,9.92,9.92A9.919,9.919,0,0,0,9.92,0ZM13.9,10.8l-4.34,4.34A1.24,1.24,0,0,1,7.8,13.382L11.268,9.92,7.8,6.456A1.24,1.24,0,0,1,9.557,4.7l4.34,4.34a1.236,1.236,0,0,1,.362.878A1.223,1.223,0,0,1,13.9,10.8Z" fill="#746AE8"/></svg></div>
                      </div>`;

          parentDiv.innerHTML = html;
          initialize.appendChild(parentDiv);
          parentElement.appendChild(initialize);
        }


      }
    }
  }





});
