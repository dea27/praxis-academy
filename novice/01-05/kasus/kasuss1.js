/*Program :array2.cpp*/
#include <stdio.h>
int main()
{
  int square[100];
  int i; /*loop index*/;
  int k; /*the integer*/

  /*calculate the squares */
  for (i=0; i<10; i++)
  {
    k= i+1;
    square[i]=k*k;
    printf("\nPangkat dari %d adalah %d ", k, square[i]);
  }
  return 0;
}