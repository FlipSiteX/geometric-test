const shapes = document.querySelector('.shapes')
const information = [{
        title: "Квадрат — Труженик",
        text: "У вас доминирует левое полушарие мозга - вы обладатель аналитического склада ума. Вам легче даются математические расчеты и логические цепочки, чем интуитивное восприятие ситуаций и вещей.\n            Ваши главные качества: выносливость, усидчивость, методичность, логика, упорство.\n            Вы очень любите порядок во всем. Работу предпочитаете с конкретно поставленными задачами и целями. Неопределенность – это не про вас. Она выводит из равновесия. Вы не любите сюрпризов и спонтанных действий. Все должно быть так, как вы запланировали и никак иначе.\n            Вы способны упорядочить вокруг себя все: людей, вещи, даже события. Это и выделяет вас среди остальных. Вы - упорные, часто становитесь трудоголиками, обладаете практическим складом ума."
    },
    {
        title: "Треугольник – Лидер",
        text: "В вас заложено много лидерских качеств. Вы умеете концентрироваться на главной цели и достигать её, преодолевая все препятствия, т.к. вы человек активный, обладаете аналитическим складом ума и развитой силой воли. \n" +
            "Ваше левое полушарие мозга работает активнее, чем правое, поэтому вы способны быстро и качественно анализировать информацию, в короткие сроки принимать взвешенные решения. Ваше внимание сосредоточено на сути проблем, а не на мелочах. Поэтому, вы хорошо умеете решать любые задачи и проблемы, причем нестандартными способами. Вы отдаете предпочтение работе, которая требует ловкости, сообразительности и решимости. Вы уверенные и пылкие, с собственными моральными суждениями, знающие цену своего труда. Ваш труд сложно обесценить или занизить, вы этого не позволите. Часто вы оказываетесь трудоголиками, что приводит к перенапряжению."
    },
    {
        title: "Круг – Коммуникатор",
        text: "«Круг» — это символ полноты, гармонии, равенства. Поэтому, если вы выбрали эту фигуру, то вы - целостная социальная личность. У вас развито правое полушарие, отвечающее за образность мышления, фантазию, творчество, эмоции. Главной ценностью для вас являются окружающие люди. Вы прекрасный слушатель и советчик, часто переживаете за других даже больше, чем за себя. Вы, как никто другой, умеете читать людей, всегда знаете, кто говорит правду, а кто ложь. Хорошо понимаете проблемы других людей и поэтому имеете множество друзей. Главные ваши качества: доброта, забота, душевность. У вас более развито правое полушарие, поэтому решения в основном принимаете не логикой, а руководствуясь интуицией. Она у вас отменная! Социальность не всегда идет вам на пользу. Вы склонны угождать всем и ставить на первый план окружающих людей, а не задачу. Вы внушаемы и нерешительны. Вас легко переубедить или даже заставить отказаться от своей точки зрения."
    },
    {
        title: "Прямоугольник – Переходный тип личности",
        text: "Вы человек любознательный, проявляющий интерес ко многим сферам. «Прямоугольник» относится к переходящим типам личности. Сейчас вы имеете задатки всех остальных типов, но пока что не можете определится. Прямоугольник часто выбирают люди, которых не устраивает их настоящее жизненное положение. Вам нужны перемены. В данный период жизни вы непосредственны, часто меняете свои решения, пробуете новое, тем самым стараясь найти себя. Вы любознательны, открыты новому – это обязательно пойдет вам на пользу. Если только вы надолго не задержитесь в таком состоянии. Стоит упомянуть, что сейчас вас очень легко обмануть или навязать вам чужое мнение. Опасайтесь этого, не дайте людям поглотить вас."
    },
    {
        title: "Зигзаг – Творец",
        text: "Вы - человек творческий, креативный, нестандартный. Генератор различных идей и новшеств. У вас более развито правое полушарие мозга, отсюда и креативность, и богатое воображение. Вы видите картину или образ целостным, особо не обращая внимание на детали. Вашим главным отличием является умение создавать уникальные вещи или идеи. Вы умеете комбинировать, на первый взгляд, не комбинирующиеся вещи. Это ваш врожденный талант. Мир вы воспринимаете, как вечно меняющийся механизм и это вас радует и вдохновляет. Жить вечным днем сурка – это не про вас. Вам сложно дается рутинная работа, исполнение четких инструкция и правил. Ваш внутренний мир полон и удивителен, вы цените его и живете будто в двух мирах одновременно. Один мир реальный, а другой лично ваш, основанный на ваших идеях и фантазиях. Вы обладаете отменным вкусом и стилем. Чувство эстетики для вас очень важно. Вы ранимая, очень чувствительная личность, не терпящая критику и ограничения. Ваш единственный минус в том, что вы часто вначале делаете, а потом уже думаете. Такие решения часто выходят вам «боком»."
    }
]

for (let shape of shapes.children) {
    shape.addEventListener("click", () => {
        document.body.insertAdjacentHTML("afterbegin", `
        <div class="information">
            <div class="title">
                <h4>${information[shape.id].title}</h4>
                <i class="fa-regular fa-rectangle-xmark"></i>
            </div>
            <p>${information[shape.id].text}</p>
            <button class="professions">Подходящие профессии</button>
        </div>`)
        document.querySelector('i').addEventListener("click", () => {
            document.body.removeChild(document.querySelector('.information'))
        })
    })
}


document.body.addEventListener("touchstart", (event) => {
    console.log(event.targetTouches[0].target.id)
})