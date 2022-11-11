function sum(a) {
    a = a || 0;
    console.log(a);
    return (n) => sum(a + n);
}
