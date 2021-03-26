// Business logic

function languageScore(eggKindVal, residenceVal, shoutVal, affilVal, traitVal) {
  return eggKindVal + residenceVal + shoutVal + affilVal + traitVal
}

const ruby = "Ruby"
const react = "React"
const swift = "Swift"

// User experience logic

$(document).ready(function(event) {
  $("language-test").submit(function() {
    const eggKindVal = parseInt($("input:radio[name=egg-kind]:checked").val())
    const residenceVal = parseInt($("input:radio[name=residence]:checked").val())
    const shoutVal = parseInt($("input:radio[name=shout]:checked").val())
    const affilVal = parseInt($("input:radio[name=affil]:checked").val())
    const traitVal = parseInt($("input:radio[name=trait]:checked").val())
    const languageScore = languageScore(eggKindVal, residenceVal, shoutVal, affilVal, traitVal)

    const reasonWhy = ($("p#form-results").text("reason-why")

    if (languageScore <= 40) {
      // Ruby, this happens
      
      $("#form-score").text(languageScore)
      $("#language-result").text(ruby)
      $("#form-results").text(reasonWhy)

    } else if (languageScore > 40 && languageScore < 60) {
      // React, this happens

      $("#form-score").text(languageScore)
      $("#language-result").text(react)
      $("#form-results").text(reasonWhy)

    } else if (languageScore >= 60) {
      // Swift, this happens

      $("#form-score").text(languageScore)
      $("#language-result").text(swift)
      $("#form-results").text(reasonWhy)
    }
    
    $("#form-feedback").show()

    event.preventDefault()
  })
})