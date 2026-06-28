# 1.  Write an assert statement that triggers an AssertionError if the variable spam is an integer less than 10.
spam = 9
assert spam > 10
# 2.  Write an assert statement that triggers an AssertionError if the variables eggs and bacon contain strings that are the same as each other,
#  even if their cases are different. (That is, 'hello' and 'hello' are considered the same, as are 'goodbye' and 'GOODbye'.)
eggs = 'oil'
bacon = 'oil'
assert eggs.upper() != bacon.upper()
# 3.  Write an assert statement that always triggers an AssertionError.
assert False
