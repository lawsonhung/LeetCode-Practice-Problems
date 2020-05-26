class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        # def square(num):
        #     return num * num
        
        print(A)
        # unsortedSquares = map(square, A)
        # print(sorted(unsortedSquares))
        
        # for item in unsortedSquares:
        #     print(item)
            
        # sortedSquares = unsortedSquares.sort()
        # for item in sortedSquares:
        #     print(item)
            
        # return sorted(map(square, A))
        return sorted(num*num for num in A)
      