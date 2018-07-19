
function linkToIndex() {
    window.location.href='/index.html';
}

$( document ).ready(function() {
    //On click, go to index.html link
    $(".item").on("click", linkToIndex);
});