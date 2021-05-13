document.addEventListener('DOMContentLoaded', () => {


    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    const sendBtn = document.querySelector('#send')





    const questions = [
        {
            question: "Какого цвета бургер?",
            answers: [
                {
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                {
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    title: 'Лук',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Добавить соус?",
            answers: [
                {
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'checkbox'
        }
    ];

    btnOpenModal.addEventListener('click', () => {

        modalBlock.classList.add('d-block');
        playTest();
    })




    closeModal.addEventListener('click', () => {

        modalBlock.classList.remove('d-block');
    })


    const playTest = () => {

        let finalAnswers =[];
        let numberQuestions = 0;

        const renderAnswers = (index) => {

            questions[index].answers.forEach((item) => {

                const answerItem = document.createElement('div');
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
                answerItem.innerHTML = `
         
                <input type="${questions[index].type}" id="${item.title}" name="answer" class="d-none" value='${item.title}'>
                <label for="${item.title}" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${item.url}" alt="burger">
                  <span>${item.title}</span>
                </label>`;

                formAnswers.appendChild(answerItem);

            })
        }


        const renderQuestions = (indexQuestions) => {
            formAnswers.textContent = '';
            questionTitle.textContent = `${questions[indexQuestions].question}`;
            renderAnswers(indexQuestions);

        }
        renderQuestions(numberQuestions);



const checkAnswer =()=>{
    let obj={};

    const inputs = [...formAnswers.elements].filter(input=> input.checked);
    inputs.forEach((item, index)=>{
     return obj[`${index}${questions[numberQuestions].question}`]=item.value
    })

    finalAnswers.push(obj)
    console.log(obj);
}



  nextBtn.addEventListener('click', ()=>{
    checkAnswer()
    if(questions.length -1 > numberQuestions){
        sendBtn.classList.add('d-none')
        prevBtn.classList.remove('hide')
        numberQuestions++;
        renderQuestions(numberQuestions);

       
    }else{
        formAnswers.textContent='Спасибо'
        nextBtn.classList.add('hide')
        prevBtn.classList.add('hide')
        sendBtn.classList.remove('d-none')
    }

  })

  prevBtn.addEventListener('click', ()=>{
    checkAnswer()
    if(numberQuestions > 0){
        sendBtn.classList.add('d-none')
        nextBtn.classList.remove('hide')
        numberQuestions--;
        renderQuestions(numberQuestions);
  
    }else{
      
        prevBtn.classList.add('hide')
    } 



})












    }

})