# Ceasar Cipher Explained: High Level

* I would start by writing down what I am attempting to do: The first prompt says write a program that will take a string and encode it. This means I will need to write a function.
* After writing my function I will name it after what I'll need it for, in the function is already prompted the example so I will use "encode".
* Within that Ill have it take in a string and a number since we have the string to encode and the shift number
* Next I'll create an array of the alphabet
* I'll need an output variable set to call the result so I'll set that to "coded"
* Because this is a pattern that will need to perform an action on multiple items, I know that I'll need to make a Loop function to iterate.
* The characters in the array have index values starting from 0 so A would be 0, B would be 1, c 2, d 3, and so on...
* So I will start making conditions for the index, the fist will be for the current letter adding the shift number to the new letter index number
* Because the index will go to 25: I'll need to write a conditional that will wrap the numbers back if it goes over.
* I can set the condition so that if the index goes over 25 it will minus 26 to bring it back to 0 so we can run the code both ways
* I'll create another that if the index goes the other way, so below 0, I would add 26 so we can run the code both ways
* Then Ill write the else condition which would add to the coded the alphabet new index
* Once finished I'll check the code with console log
