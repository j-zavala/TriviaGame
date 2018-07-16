$( document ).ready(function() {
    //On click, run function
    $(".item").on("click", linkToIndex);

    //go to index.html link
    function linkToIndex() {
        window.location.href='/index.html';
    }
});