setTimeout(
    () => 
    $("div[data-component='activecode'] .ac_actions button").each(function() {if($(this).text() == "Load History") $(this).click() }),
    2000);
