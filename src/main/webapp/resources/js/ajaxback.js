var prefix = '/ajax2';

var RestGet = function() {
    $.ajax({
        type: 'GET',
        url:  prefix + '/Data/' + Date.now(),
        dataType: 'json',
        async: true,
        success: function(result) {
            alert('At ' + result.time
                + ': ' + result.message);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status + ' ' + jqXHR.responseText);
        }
    });
}

var RestPut = function() {

    var JSONObject= {
        'time': Date.now(),
        'message': 'User PUT call !!!'
    };

    $.ajax({
        type: 'PUT',
        url:  prefix + '/Data',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(JSONObject),
        dataType: 'json',
        async: true,
        success: function(result) {
            alert('At ' + result.time
                + ': ' + result.message);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status + ' ' + jqXHR.responseText);
        }
    });
}

var RestPost = function() {
    $.ajax({
        type: 'POST',
        url:  prefix + '/Data',
        dataType: 'json',
        async: true,
        success: function(result) {
            alert('At ' + result.time
                + ': ' + result.message);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status + ' ' + jqXHR.responseText);
        }
    });
}

var RestDelete = function() {
    $.ajax({
        type: 'DELETE',
        url:  prefix + '/Data/' + Date.now(),
        dataType: 'json',
        async: true,
        success: function(result) {
            alert('At ' + result.time
                + ': ' + result.message);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status + ' ' + jqXHR.responseText);
        }
    });
}
