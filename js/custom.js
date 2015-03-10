/**
 * Created by Gaoxin on 15/2/15.
 */
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});

    /*Select delivery address function*/
    $('#select-delivery-address a').click(function(){
        $("#select-delivery-address a").removeClass('list-group-item-info');
        $(this).addClass('list-group-item-info');
        $("#select-delivery-address a .selected-icon").addClass('hidden');
        $(this).find('.selected-icon').removeClass('hidden');
    });
});