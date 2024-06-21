import tensorflow as tf

# Load pre-trained model
model = tf.keras.models.load_model('crop_health_model')

def predict_crop_health(image_path):
    image = tf.keras.preprocessing.image.load_img(image_path, target_size=(224, 224))
    input_arr = tf.keras.preprocessing.image.img_to_array(image)
    input_arr = tf.expand_dims(input_arr, axis=0)
    input_arr = tf.keras.applications.mobilenet_v2.preprocess_input(input_arr)

    predictions = model.predict(input_arr)
    return predictions  # Example output: [0.1, 0.9] (healthy, diseased)
