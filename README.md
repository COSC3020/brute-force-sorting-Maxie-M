# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Runtime Analysis, Maxie M. 

**Best Case**
- In the best-case, this would occur when the input is already sorted
- If this is the case, only the initial permutation (input itself) needs to be checked
- Number of permuations checked will be $1$
- $\text{Best-Case Time Complexity} = O(n)$
  - Due to the single sorted check

**Worst Case** 
- In the worst-case, this would occur when the list is not sorted
- If this is the case, all possible permutations of the list will be checked
- For an input list of size $n$, the total number of permutations is $n!$ (n factorial)

**Time Complexity** 
- Algorithm will first generate all permuations of the list
- For each permuatation, checkSorted function runs $O(n)$ time to verify if list is sorted
- $\text{Time Complexity} = O(n! \times n)$
  - In the worst case

**Conclusion** 
- $\text{Best-Case Time Complexity} = O(n)$
- $\text{Worst-Case Time Complexity} = O(n! \times n)$


## Plagiarism Statement: 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Resources 
**Used these resources in-oder to better understand brute-force sorting and how/why permuations are used for this algorithm** 
- https://www.freecodecamp.org/news/brute-force-algorithms-explained/
- https://www.geeksforgeeks.org/print-all-possible-permutations-of-an-array-vector-without-duplicates-using-backtracking/
