$(document).ready(function() {
    const text = $('#dhn').text();
    $('#dhn').html('');

    for (let char of text) {
        $('#dhn').append('<span>' + char + '</span>');
    }

    const letters = $('#dhn span');
    let index = 0;

    function animateLetters() {
        if (index < letters.length) {
            if ($(letters[index]).text() !== ' ') {
                $(letters[index]).css('color', 'rgb(50, 170, 205)');
                setTimeout(() => {
                    $(letters[index]).css('color', 'white');
                    index++;
                    animateLetters();
                }, 1000);
            } else {
                index++;
                animateLetters();
            }
        } else {
            index = 0;
            animateLetters();
        }
    }

    animateLetters();
});

$(document).ready(function() {
    $('.mem').click(function() {
        $('.overlay').fadeIn(300);
    });

    $('.close-button').click(function() {
        $('.overlay').fadeOut(300);
    });

    $('.con').click(function() {
        $('.overlay-2').fadeIn(300);
    });

    $('.close-button-2').click(function() {
        $('.overlay-2').fadeOut(300);
    });
});

$(document).ready(function() {
    const pgpKey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZwxqehYJKwYBBAHaRw8BAQdA6SB9ohj/2FrfhQoABalw8/XnqE4Psdgz+4Su
LB4fSd60HXBhdWxhIDxwYXVsYWhhaGFoYUBwcm90b24ubWU+iHIEExYIABoECwkI
BwIVCAIWAQIZAQWCZwxqegKeAQKbAwAKCRCkgfPX2Njne595AQDPwATvT/QRkX+a
9waH9tE0+yOoMC6IGf6ZXHxNlDORrgEAlIv6QSJqSjP9knZnqXdzhAuf1BXv29n6
upnwVDCBFwO4OARnDGp6EgorBgEEAZdVAQUBAQdA+qLQASqon4AvsgR5KTKbGPPH
/xVAbOjw7JQ+jZtbFicDAQgHiGEEGBYIAAkFgmcManoCmwwACgkQpIHz19jY53tJ
SwD/eVewQgbk6nGbVtTWJMq8VSwirr/V1ZD4fWLLiBUhnvwA/2YzO4E7AGJO28gS
QX1b8Hhf/D48pMmgRdhACdcUaHMC
=d6fa
-----END PGP PUBLIC KEY BLOCK-----
`;
    const email = 'paulahahaha@proton.me'


    $('#copyemail').click(function() {
        navigator.clipboard.writeText(email).then(function() {
        }).catch(function(error) {
            alert('Error: ' + error);
        });
    });

    $('#copy').click(function() {
        navigator.clipboard.writeText(pgpKey).then(function() {
        }).catch(function(error) {
            alert('Error: ' + error);
        });
    });

    $('#download').click(function(event) {
        event.preventDefault();
        const link = document.createElement('a');
        link.href = 'src/paula.asc';
        link.download = 'paula.asc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});