// https://stackoverflow.com/a/21477063; modified
function linkCheck(url) {
	var http = new XMLHttpRequest();

	http.open('HEAD', url, false);
	http.send();

	return http.status != 404;
}

var checksums = "";

if (linkCheck("MD5SUMS"))
    checksums += " <a href=\"MD5SUMS\">MD5</a>";

if (linkCheck("SHA1SUMS"))
    checksums += " <a href=\"SHA1SUMS\">SHA-1</a>";

if (linkCheck("SHA224SUMS"))
    checksums += " <a href=\"SHA1SUMS\">SHA-224</a>";

if (linkCheck("SHA256SUMS"))
    checksums += " <a href=\"SHA256SUMS\">SHA-256</a>";

if (linkCheck("SHA384SUMS"))
    checksums += " <a href=\"SHA384SUMS\">SHA-384</a>";

if (linkCheck("SHA512SUMS"))
    checksums += " <a href=\"SHA512SUMS\">SHA-512</a>";

if (checksums != "")
    document.write("<span class=\"checksum\">File integrity checks:" + checksums + "</span>");
