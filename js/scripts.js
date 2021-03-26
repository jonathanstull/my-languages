// Business logic

const messageRuby = "Ruby"
const messageReact = "React"
const messageSwift = "Swift"

// User interface logic

$(document).ready(function() {
  $("#language-test").submit(function() {
    const reasonWhy = $("#reason-why").val()
    const testerName = $("#name").val()
    
    const eggKindVal = parseInt($("input:radio[name=egg-kind]:checked").val())
    const residenceVal = parseInt($("input:radio[name=residence]:checked").val())
    const shoutVal = parseInt($("input:radio[name=shout]:checked").val())
    const affilVal = parseInt($("input:radio[name=affil]:checked").val())
    const traitVal = parseInt($("input:radio[name=trait]:checked").val())
    const languageScore = eggKindVal + residenceVal + shoutVal + affilVal + traitVal

    if (languageScore <= 40) {      
      $("#tester-name").text(testerName)
      $("#form-score").text(languageScore)
      $(".language-result").text(messageRuby)
      $("#form-results").text(reasonWhy)
      $("#language-test").fadeToggle()
      $("#form-feedback").fadeToggle()
      $("#ruby-resources").fadeToggle()

    } else if (languageScore > 40 && languageScore < 60) {
      $("#form-score").text(languageScore)
      $(".language-result").text(messageReact)
      $("#tester-name").text(testerName)
      $("#form-results").text(reasonWhy)
      $("#language-test").fadeToggle()
      $("#form-feedback").fadeToggle()
      $("#ruby-resources").fadeToggle()

    } else if (languageScore >= 60) {
      $("#tester-name").text(testerName)
      $("#form-score").text(languageScore)
      $(".language-result").text(messageSwift)
      $("#form-results").text(reasonWhy)
      $("#language-test").fadeToggle()
      $("#form-feedback").fadeToggle()
      $("#ruby-resources").fadeToggle()
    }
    
    event.preventDefault()
  })
})