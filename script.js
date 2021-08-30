let model;

async function load() {
  model = await qna.load();
}

$('#search').click(async function() {
  let passage = $('#context').val();
  console.log(passage)
  let question = $('#question').val();
  let answers = await model.findAnswers(question, passage);
  if (answers.length > 0) {
    $('#answer').text(answers[0].text);

  }else{
    $('#answer').text("Sorry, I don't know the answer to that question");
  }
});


  