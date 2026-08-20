      fetch('LICENSE.md')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load license file');
                }
                return response.text();
            })
            .then(text => {
                document.getElementById('license-content').textContent = text;
            })
            .catch(error => {
                document.getElementById('license-content').textContent = 'Error loading license.';
                console.error(error);
            });