$(readyNow);

function readyNow() {
    console.log('rn');
    $('#add-butt').on('click', add);
    $('#sub-butt').on('click', sub);
    $('#mlt-butt').on('click', mlt);
    $('#div-butt').on('click', div);
    $('#equal-butt').on('click', equalitator);
    $('#c-butt').on('click', clearFields);

};

function add() {
    console.log('add');
};

function sub() {
    console.log('sub');
};

function mlt() {
    console.log('mlt');
};

function div() {
    console.log('div');
};

function equalitator() {
    console.log('eq');
    // $.ajax({
    //     type: 'POST',
    //     url: '/inputs',
    //     data: {
    //         inputA: $('#input-a').val(),
    //         operator: $(this).span,
    //         inputB: $('#input-b').val(),
    //     },
    // })
    
};

function clearFields() {
    $('input').val('');
    console.log('cf');
}