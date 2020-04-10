def countdown(i)
  puts i
  if i <= 0 #BASE CASE
    return
  else #RECURSIVE CASE
    countdown(i - 1)
  end
end

countdown(10)

def fact(x)
  if x == 1 # Base case
    1
  else #recrusive case
    x * fact(x - 1)
  end
end

p fact(5)