jQuery(document).ready(function() {

	//Validation for News form
	jQuery('#authorEmail').focusout(function() {
		var email = jQuery('#authorEmail').val();
		var className = this;
		var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
		if (!jQuery(this).val()) {
			if (jQuery(this).next('.error').length < 1) {
			}
			return false;
		} else {
			jQuery(this).next('.error').remove();
		}
		if (emailRegex.test(email)) {
			jQuery(this).next('.error').remove();
		} else {
			if (jQuery(this).next('.error').length < 1) {
				jQuery(this).after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + validEmail + '</div>');
			}
			return false;
		}

	});

	jQuery('.newsTitle').focusout(function() {
		if (!jQuery(this).val()) {
			if (jQuery(this).next('.error').length < 1) {
				jQuery(this).after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
			return false;
		} else {
			jQuery(this).next('.error').remove();
		}
	});

	jQuery('.createNews').click(function() {
		var email = jQuery('#authorEmail').val();
		var className = this;
		var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
		if (!jQuery('.newsTitle').val()) {
			if (jQuery('.newsTitle').next('.error').length < 1) {
				jQuery('.newsTitle').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
			return false;
		} else {
			jQuery('.newsTitle').next('.error').remove();
		}
		if (jQuery('#folders').val().length < 1) {
			if (jQuery('#folders').next('.error').length < 1) {
				jQuery('#folders').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
			return false;
		} else {
			jQuery('#folders').next('.error').remove();
		}
		if (!jQuery('#authorEmail').val()) {
			if (jQuery('#authorEmail').next('.error').length < 1) {
			}
			return true;
		} else {
			jQuery('#authorEmail').next('.error').remove();
		}
		if (emailRegex.test(email)) {
			jQuery('#authorEmail').next('.error').remove();
		} else {
			if (jQuery('#authorEmail').next('.error').length < 1) {
				jQuery('#authorEmail').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + validEmail + '</div>');
			}
			return false
		}
	});


	jQuery('.title-category').focusout(function() {
		if (!jQuery(this).val()) {
			if (jQuery(this).next('.error').length < 1) {
				jQuery(this).after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
			return false;
		} else {
			jQuery(this).next('.error').remove();
		}
	});

	jQuery('.createCategory').click(function() {
		if (!jQuery('.title-category').val()) {
			if (jQuery('.title-category').next('.error').length < 1) {
				jQuery('.title-category').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
			return false;
		} else {
			jQuery('.title-category').next('.error').remove();
		}
		if (jQuery('#folders').val().length < 1) {
			if (jQuery('#folders').next('.error').length < 1) {
				jQuery('#folders').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
			return false;
		} else {
			jQuery('#folders').next('.error').remove();
		}
		jQuery('#news-category-form').submit();
	});

	//Validdation for comment form
	jQuery('.create-comment').click(function() {
		var email = jQuery('#email').val();
		if (!jQuery('#name').val()) {
			if (jQuery('#name').next('.error').length < 1) {
				jQuery('#name').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
		} else {
			jQuery('#name').next('.error').remove();
		}
		if (!jQuery('#email').val()) {
			if (jQuery('#email').next('.error').length < 1) {
				jQuery('#email').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
		} else {
			jQuery('#message').next('.error').remove();
		}
		if (!jQuery('#message').val()) {
			if (jQuery('#message').next('.error').length < 1) {
				jQuery('#message').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
			return false;
		} else {
			jQuery('#message').next('.error').remove();
		}
		var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
		if (!jQuery('#email').val()) {
			if (jQuery('#email').next('.error').length < 1) {
			}
			return false;
		} else {
			jQuery('#email').next('.error').remove();
		}
		if (emailRegex.test(email)) {
			jQuery('#email').next('.error').remove();
		} else {
			if (jQuery('#email').next('.error').length < 1) {
				jQuery('#email').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + validEmail + '</div>');
			}
			return false;
		}
	});

	jQuery('#email').focusout(function() {
		var email = jQuery('#email').val();
		var className = this;
		var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
		if (!jQuery(this).val()) {
			if (jQuery(this).next('.error').length < 1) {
			}
			return false;
		} else {
			jQuery(this).next('.error').remove();
		}
		if (emailRegex.test(email)) {
			jQuery(this).next('.error').remove();
		} else {
			if (jQuery(this).next('.error').length < 1) {
				jQuery(this).after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + validEmail + '</div>');
			}
			return false;
		}
	});

	//Validation for url
	jQuery('.text-added').focusout(function() {
		value = jQuery(this).val();
		var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i), validEmail = emailRegex.test(value),
				urlregex = new RegExp(/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/), validUrl = urlregex.test(value);
		if (value) {
			if ((validUrl == true) || (validEmail == true)) {
			} else {
				if (jQuery('.text-added').next('.error').length < 1) {
					jQuery('.text-added').after('<div class="neos-alert neos-alert-error form-error error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + validUrl + '</div>');
				}
			}
		}
	});

	//Valudation for the tag
	jQuery('.create-tag').click(function() {
		if (!jQuery('.tagTitle').val()) {
			if (jQuery('.tagTitle').next('.error').length < 1) {
				jQuery('.tagTitle').after('<div class="neos-alert neos-alert-error form-error error category-title-error"><button type="button" class="neos-close" data-dismiss="alert">×</button>' + requiredField + '</div>');
			}
			return false;
		} else {
			jQuery('.tagTitle').next('.error').remove();
		}
	});

	//Validation for item delete before submit
	   var removeItem = function(event, link) {
		       event.preventDefault();
		       jQuery('#deleteItem').attr('action', link);
		       jQuery('#deleteItem').submit();
	   }

	   jQuery('a.delete').click(function(event) {
		       event.preventDefault();
		       var link = jQuery(this).attr('href');
		       var itemDeleteMessage = confirm(deleteMessage);
		       if (itemDeleteMessage == true) {
			           removeItem(event, link);
		       }
	   });

	//Validation for item show and hide before submit
	   var showHideItem = function(event, link) {
		       event.preventDefault();
		       jQuery('#showHideItem').attr('action', link);
		       jQuery('#showHideItem').submit();
	   }
	jQuery('a.show-hide-item').click(function(event) {
		       event.preventDefault();
		var link = jQuery(this).attr('href');
		showHideItem(event, link);
	   });

	// filter by folder and category for news
	$('#module-folder').change(function() {
		$('.folder-id').val($(this).val());
		$(this).parent('form').submit();
	});
	$('#module-category').change(function() {
		$('.cat-id').val($(this).val());
		$(this).parent('form').submit();
	});

	// filter by active and in-active comment
	jQuery('#module-comment').change(function() {
		var selectVal = jQuery('#module-comment :selected').val();
		jQuery('.comment-value').attr('value', selectVal);
		jQuery(this).parent('form').submit();
	});

	jQuery('.folderSelect').change(function(event) {
		event.preventDefault();
		var folderId = jQuery('.folderSelect :selected').val();
		jQuery.ajax({
			url: categoryUrl,
			data: {
				folderId: folderId
			},
			async: true,
			dataType: 'html',
			success: function(response) {
				if (response !== 'null') {
					categories = JSON.parse(response);
					jQuery('#categories').empty();
					var selectBox = '',
						categoryCount = categories.length;
					for (var i = 0; i < categoryCount; i++) {
						var subCategoryArry = categories[i]['subCatagories'],
							subCount = 0,
							subCategoryCount = subCategoryArry.length;
						selectBox += '<option value='+categories[i]['persistence_object_identifier']+'>'+categories[i]['title']+'</option>';
						if (categories[i]['subCatagories'].length > 0) {
							if (subCategoryArry[subCount][0] != '') {
							// optgroup
							selectBox += '<optgroup>';
							for (var j = 0; j < subCategoryCount; j++) {
								selectBox += '<option value='+subCategoryArry[j][0]+'>'+subCategoryArry[j][1]+'</option>';
							}
							selectBox += '</optgroup>';
							subCount++;
							}
						}
					}
					jQuery('#categories').append(selectBox);
					console.log(selectBox);
				} else {
					jQuery('#categories').empty();
				}
			}
		});
	});
});
var notEmptyValidation = function(selector, message) {
	var errMessage;
	jQuery(selector).each(function() {
		var msg = jsTranslate(this, 'notEmpty');
		if (msg) {
			errMessage = msg;
		} else {
			errMessage = message;
		}
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: errMessage
			}
		});
	});
};