$(readyNow);

function readyNow() {
    console.log('rn');
    $('#equal-butt').on('click', equalitator);
    $('#c-butt').on('click', clearFields);

}

function equalitator() {
    $.ajax({
        type: 'POST',
        url: '/inputs',
        data: {
            inputA: $('#input-a').val(),
            operator: $(this).span,
            inputB: $('#input-b').val(),
        },
    })
}

function clearFields() {
    $('input').val('');
    console.log('cf');
}