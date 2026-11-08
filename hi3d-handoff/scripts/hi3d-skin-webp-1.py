from PIL import Image
import glob,io
for f in glob.glob('.hi3d/pre/frog-*.src'):
    im=Image.open(f).convert('RGB');im.thumbnail((1024,1024),Image.LANCZOS);im.save(f[:-4]+'.webp','WEBP',quality=80,method=6);print(f,im.size)