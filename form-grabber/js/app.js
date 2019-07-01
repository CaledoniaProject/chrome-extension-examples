(function() {
	var forms = document.getElementsByTagName('form')

	for (var i = 0; i < forms.length; i ++) {
		// console.log('binding', i)

		forms[i].addEventListener('submit', function (evt) {
			var data = {
				'referer': window.location.href,
				'action': this.getAttribute('action'),
				'method': this.getAttribute('method'),
				'inputs': {}
			}

			var inputs = this.getElementsByTagName('input')
			for (var j = 0; j < inputs.length; j ++) {
				var name   = inputs[j].getAttribute('name')
				var value  = inputs[j].getAttribute('value')

				if (name)
					data['inputs'][name] = value
			}

			console.log('Detected form', JSON.stringify(data))
		})
	}
})()

