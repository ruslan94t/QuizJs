
document.addEventListener('DOMContentLoaded', () => {


    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const btnCloseModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    const sendBtn = document.querySelector('#send');
     
    






    let questions = [
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
            type: 'radio'
        }
    ];


    const openModal = () => {
        modalBlock.classList.add('d-block')
        playTest();
     

    }

    const closeModal = () => {
        modalBlock.classList.remove('d-block')
    }


const playTest = ()=>{
    let finalAnswers =[];
    let numberQuestions = 0;

    const renderAnswers = (index)=>{
        questions[index].answers.forEach((item)=>{
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

    // func rendrig 
    const renderQuestions = (indexQuestions) => {
        formAnswers.innerHTML = '';
        if(numberQuestions >= 0 && numberQuestions <= questions.length-1){
            questionTitle.textContent = `${questions[indexQuestions].question}`;
            renderAnswers(indexQuestions);
            nextBtn.classList.remove('d-none')
            prevBtn.classList.remove('d-none')
        }

        if(numberQuestions ===0){
            prevBtn.classList.add('d-none')
        }
        if(numberQuestions === questions.length){
            nextBtn.classList.add('d-none')
            prevBtn.classList.add('d-none')
            sendBtn.classList.add('d-block')
            formAnswers.innerHTML = `
            <div class="form-group">
    <label for="exampleInputEmail1">Phone number</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
            `
        }
     
       

    }



    //begin rendring func
    renderQuestions(numberQuestions);


const checkAnswer = ()=>{

const obj = {};



const inputs = [...formAnswers.elements].filter((input)=> input.checked || input.id === 'exampleInputEmail1')

  inputs.forEach((input, index)=>{

    if(numberQuestions >= 0 && numberQuestions <= questions.length-1){
      obj[`${index}${questions[numberQuestions].question}`]=input.value
    }
    if(numberQuestions === questions.length){
        obj['Phone']=input.value
        closeModal()
    }

  })

finalAnswers.push(obj)

console.log(finalAnswers);



}


nextBtn.addEventListener('click', ()=>{
        checkAnswer()
        numberQuestions++
    renderQuestions(numberQuestions);
})

prevBtn.addEventListener('click', ()=>{

    numberQuestions--;
    renderQuestions(numberQuestions);
 })


sendBtn.addEventListener('click', ()=>{
    checkAnswer();
    console.log(finalAnswers);
})










    }







    btnOpenModal.addEventListener('click', openModal)
    btnCloseModal.addEventListener('click', closeModal)




})