import pdfplumber
import docx
import os
import nltk
from pdf2image import convert_from_path
import pytesseract

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
def extract_text_from_pdf(file_path):

    text = ""

    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""

    return text


def extract_text_with_ocr(file_path):

    POPPLER_PATH = r"C:\Users\daxp1\Downloads\Release-25.12.0-0\poppler-25.12.0\Library\bin"

    images = convert_from_path(
        file_path,
        poppler_path=POPPLER_PATH
    )

    text = ""

    for img in images:
        text += pytesseract.image_to_string(img)

    return text
def extract_text_from_docx(file_path):

    document = docx.Document(file_path)

    text = ""

    for paragraph in document.paragraphs:
        text += paragraph.text + "\n"

    return text


def extract_text_from_txt(file_path):

    with open(file_path, "r", encoding="utf-8") as file:
        text = file.read()

    return text



def split_into_sentences(text):

    sentences = nltk.sent_tokenize(text)

    return sentences


def extract_text(file_path):

    extension = os.path.splitext(file_path)[1].lower()

    text = ""

    if extension == ".pdf":
        text = extract_text_from_pdf(file_path)

        # 🔥 fallback to OCR if no text found
        if not text or len(text.strip()) == 0:
            text = extract_text_with_ocr(file_path)

    elif extension == ".docx":
        text = extract_text_from_docx(file_path)

    elif extension == ".txt":
        text = extract_text_from_txt(file_path)

    else:
        return "Unsupported file format"

    return text