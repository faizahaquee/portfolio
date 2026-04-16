import cv2
import numpy as np
from PIL import Image

def process_stickers(image_path, output_dir):
    # Read the image including alpha channel
    img = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
    
    if img is None:
        print(f"Error: Could not read {image_path}")
        return
        
    print(f"Original shape: {img.shape}")
    
    # Create mask for transparency or white background
    if len(img.shape) == 3 and img.shape[2] == 4:
        # Has alpha channel
        alpha = img[:,:,3]
        _, mask = cv2.threshold(alpha, 10, 255, cv2.THRESH_BINARY)
    else:
        # Assuming white background, convert to grayscale
        if len(img.shape) == 3 and img.shape[2] == 4:
            gray = cv2.cvtColor(img, cv2.COLOR_BGRA2GRAY)
        else:
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        _, mask = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)
        
        # Add alpha channel if it doesn't exist
        if len(img.shape) == 3 and img.shape[2] == 3:
            img = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)

    # Find contours
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    print(f"Found {len(contours)} contours")
    
    count = 0
    for i, c in enumerate(contours):
        # Filter out very small contours (noise)
        if cv2.contourArea(c) > 500:
            x, y, w, h = cv2.boundingRect(c)
            
            # Add padding
            pad = 10
            x1, y1 = max(0, x-pad), max(0, y-pad)
            x2, y2 = min(img.shape[1], x+w+pad), min(img.shape[0], y+h+pad)
            
            # Crop
            cropped = img[y1:y2, x1:x2].copy()
            
            # Mask out the background strictly for the cropped area
            crop_mask = np.zeros(cropped.shape[:2], dtype=np.uint8)
            shifted_contour = c - [x1, y1]
            cv2.drawContours(crop_mask, [shifted_contour], -1, (255), thickness=cv2.FILLED)
            
            # Apply transparency outside the contour
            cropped[:,:,3] = cv2.bitwise_and(cropped[:,:,3], crop_mask)
            
            out_path = f"{output_dir}/sticker_{count}.png"
            cv2.imwrite(out_path, cropped)
            print(f"Saved {out_path}")
            count += 1

process_stickers('/Users/faiza/Desktop/portfolio-site/Stickers.png', '/Users/faiza/Desktop/portfolio-site/portfolio-app/public')
