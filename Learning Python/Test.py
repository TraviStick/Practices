disDict = {'yo' : 1, 'cuh' : 2}
disList = ['yo', 'cuh']



for k,v in disDict.items():
    for e in disList:
        if e == k:
            disDict[k]+=1
            print(e, k)


print(disDict)
