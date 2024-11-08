function permutationSort(a)
{
    let count = { value: 0 };
    let sorted = permute(a, 0, a.length - 1, count);
    return count.value;
}

function permute(a, l, r, count) 
{
    if (l == r) 
    {
        count.value++;

        if (checkSorted(a)) 
        {
            return true;
        }
        return false;
    }
    for (let i = l; i <= r; i++)
    {
        swap(a, l, i);

        if (permute(a, l + 1, r, count))
        {
            return true;
        }
        swap(a, l, i);
    }
    return false;
}

function checkSorted(a) 
{
    for (let i = 0; i < a.length - 1; i++) 
    {
        if (a[i] > a[i + 1])
        {
            return false;
        }
    }
    return true;
}

function swap(a, i, j) 
{
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}
