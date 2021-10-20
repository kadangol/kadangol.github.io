$(() => {
    let question = $("#question"),
        form = $("#magic8");

    form.submit(() => {
        askQuestion();
        return false;
    });

    function askQuestion() {
        $.get('/8ball', {
                contentType: "application/json; charset=utf-8"
            })
            .done((res) => {
                let json = JSON.parse(res);
                question.val(json.answer);
                question.focus(function() {
                    this.select();
                });
            })
            .fail(() => {
                console.log("Unable to process");
            });
    }

});