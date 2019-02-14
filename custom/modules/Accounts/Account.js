var editSaleStatus = true;

$(document).on('change' , function(e) {

	if(e.target.id == 'sale_status_c' && editSaleStatus)
	{
		editSaleStatus = false;

		$(e.target.parentNode).append('<div><b>Факт-причина для изменения SaleStatus</b></div>');
		var saleStatusNote = $('<textarea/>');
		$(e.target.parentNode).append(saleStatusNote);

    $('#inlineEditSaveButton').on('click', function(){

      $.ajaxSetup({"async": false});
      $.post('index.php',
      {
        'module': 'Notes',
        'action': 'Save',
        'name': 'SaleStatus UPDATED: ' + e.target.querySelector('[selected]').label + ' -> ' + e.target.querySelector('[value=' + e.target.value + ']').label,
        'parent_type': 'Accounts',       
        'parent_id': $("input[name=record]").attr( "value" ),
        'description': saleStatusNote[0].value,
        'isDuplicate': false,
        'assigned_user_id': $("#assigned_user_id").text(),
      }, null, "form-data");
      $.ajaxSetup({"async": true});

      editSaleStatus = true;
    });
	}
});