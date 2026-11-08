from PIL import Image
ims=[Image.open(f'exports/frog-dreams/reports/hi3d-xiyou-{k}.png') for k in ['3b756e8d','6317ac56','7832406a','9f4bf24f']]
o=Image.new('RGB',(1280,320),'white')
for i,m in enumerate(ims):o.paste(m.convert('RGB'),(i*320,0))
o.save('exports/frog-dreams/reports/hi3d-xiyou-sheet.png')
