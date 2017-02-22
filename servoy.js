/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DD9BA3D5-AD37-47C8-A3FD-9C991BBFDEE2"}
 */
var url = 'http://localhost:4000/'
	


/**
 * @properties={typeid:35,uuid:"E865FB3A-AABE-477D-B4EF-6E1016D57024",variableType:-4}
 */
var home = function () {
	var response = plugins.http.createNewHttpClient()
		.createGetRequest(url)
		.executeRequest()
	
	application.output(response.getStatusCode())
	application.output(response.getResponseBody())
}

/**
 * @properties={typeid:35,uuid:"7FC64243-3AEA-42D3-9D95-365988464A10",variableType:-4}
 */
var animalsGet = function () {
	var slug = 'animals'
	var response = plugins.http.createNewHttpClient()
	.createGetRequest(url + slug)
	.executeRequest()

	application.output(response.getStatusCode())
	application.output(response.getResponseBody())
}

/**
 * @properties={typeid:35,uuid:"648D19F2-B594-4E63-874F-1441098A5661",variableType:-4}
 */
var animalsPost = function () {
	var slug = 'animals'
	var values = { name: "Servoy", count: 1 }
		
	var client = plugins.http.createNewHttpClient();
	var poster = client.createPostRequest(url + slug);
	poster.addHeader('Content-type', 'application/json')
	poster.addParameter(null, JSON.stringify(values))
	var response = poster.executeRequest()
		
	application.output(response.getStatusCode())
	application.output(response.getResponseBody())
}