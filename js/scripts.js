const languageScore = eggKind + residence + shout + affil + trait

$(document).ready(function(event) {
  $("language-test").submit(function() {
    const eggKind = parseInt($("input:radio[name=egg-kind]:checked").val())
    const residence = parseInt($("input:radio[name=residence]:checked").val())
    const shout = parseInt($("input:radio[name=shout]:checked").val())
    const affil = parseInt($("input:radio[name=affil]:checked").val())
    const trait = parseInt($("input:radio[name=trait]:checked").val())

    if (languageScore <= 40) {
      // this happens
    } else if (languageScore > 40 && languageScore < 60) {
      // this happens
    } else if (languageScore >= 60) {
      // this happens
    }

    event.preventDefault()
  })
})