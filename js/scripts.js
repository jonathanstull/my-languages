$(document).ready(function(event) {
  $("language-test").submit(function() {
    const eggKind = parseInt($("input:radio[name=egg-kind]:checked").val())
    const residence = parseInt($("input:radio[name=residence]:checked").val())
    const shout = parseInt($("input:radio[name=shout]:checked").val())
    const affil = parseInt($("input:radio[name=affil]:checked").val())
    const trait = parseInt($("input:radio[name=trait]:checked").val())

    

    event.preventDefault()
  })
})