function isPangram(string) {
    return string.match(/(?i)(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*y)(?=.*z).*/)
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))