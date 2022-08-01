$(readyNow);

function readyNow() {
    console.log('rn');
    $('#add-butt').on('click', add);
    $('#sub-butt').on('click', sub);
    $('#mlt-butt').on('click', mlt);
    $('#div-butt').on('click', div);
    $('#equal-butt').on('click', equalitator);
    $('#c-butt').on('click', clearFields);
    getCalculations();
    

};
let operator = '';

function add() {
    // console.log('add');
    operator = '+';
};

function sub() {
    // console.log('sub');
    operator = '-';
};

function mlt() {
    // console.log('mlt');
    operator = '*';
};

function div() {
    // console.log('div');
    operator = '/';
};

function equalitator() {
    // console.log('eq');
    addCalculations();
    
};

function clearFields() {
    $('input').val('');
    // console.log('cf');
}

function addCalculations() {
    // console.log('operator;  ', operator);
    $.ajax({
        type: 'POST',
        url: '/inputs',
        data: {
            inputA: $('#input-a').val(),
            operator: operator,
            inputB: $('#input-b').val(),
            
        }
    }).then(function (response){
        console.log('added calculation:', response);
        getCalculations();
        clearFields();
    })
}

function getCalculations(){
    $.ajax({
        type: 'GET',
        url: '/inputs',
    }).then(function (response) {
        console.log(response);
        $('#results').empty();
        for (let i = 0; i < response.length; i++) {
            let calc = response[i];
            $('#results').append(`
            <div>${calc.inputA} ${calc.operator} ${calc.inputB} ${`=`} ${calc.output}</div>
            
            `);
        }
    });
}