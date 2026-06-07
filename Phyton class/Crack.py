from string import digits, ascii_letters, punctuation

for i in digits + ascii_letters + punctuation:
    for j in digits + ascii_letters + punctuation:
        for s in digits + ascii_letters + punctuation:
            for z in digits + ascii_letters + punctuation:
                print(i, j, s, z) 